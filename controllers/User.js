const User = require("../models/User.model");

require("dotenv").config();

/**
 * Collection Cache Payload
 * @typedef {object} BindPayload
 * @property {string} address.required
 * @property {string} worldcoin_hash.required
 */

/**
 * Reward Redeemed Response
 * @typedef {object} DefaultSuccessResponse
 * @property {string} message.required - Message of the response
 */

/**
 * Reward Redeemed Response
 * @typedef {object} DefaultErrorResponse
 * @property {string} message.required - Message of the response
 */

/**
 * POST /user/bind
 * @summary Bind Address to Worldcoin Hash
 * @tags User
 * @description Bind user to Worldcoin Haish
 * @param {BindPayload} request.body.required - Collection Cache Payload
 * @return {DefaultSuccessResponse} 200 - Success response
 * @return {DefaultErrorResponse} 400 - Bad request response
 */
exports.bind = async (req, res, next) => {
  const { address, worldcoin_hash } = req.body;

  // Verify the signature of the claim

  // Update the user's cheese count
  try {
    await User.create({
      address,
      worldcoin_hash,
    });
    res.status(200).json({
      message: `User binded ${address} to ${worldcoin_hash}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
};

/**
 * GET /user/retrieve/{address}
 * @summary Return User Data
 * @tags User
 * @description  Return User Data
 * @param {string} address.path.required - Address of the user
 * @return {DefaultSuccessResponse} 200 - Success response
 * @example response - 200 - Metadata Retrieved
 * {
 *   "address": "0x...",
 *   "worldcoin_hash": "hash"
 * }
 * @return {DefaultErrorResponse} 400 - Bad request response
 */
exports.retrieve = async (req, res, next) => {
  const { address } = req.params;
  let user;
  try {
    user = await User.findOne({ address });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
  if (!user) {
    return res.status(200).json({
      message: "User not bound",
    });
  }
  return res.status(200).json({
    address: user.address,
    worldcoin_hash: user.worldcoin_hash,
  });
};

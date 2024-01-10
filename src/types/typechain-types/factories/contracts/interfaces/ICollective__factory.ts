/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICollective,
  ICollectiveInterface,
} from "../../../contracts/interfaces/ICollective";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenContracts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "honeyPots",
        type: "uint256",
      },
    ],
    name: "Collective_MitMatchedLength",
    type: "error",
  },
  {
    inputs: [],
    name: "Collective__Fallback",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "Collective__MemberAlreadyAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "invitee",
        type: "address",
      },
      {
        internalType: "bytes16",
        name: "inviteID",
        type: "bytes16",
      },
    ],
    name: "Collective__NoValidInvite",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Collective__OnlyCWallet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Collective__OnlyInitiator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Collective__OnlyMember",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Collective__OnlyOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "Collective__PoolAlreadyAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "Collective__PoolNotAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "honeyPot",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Collective__PoolRewardNotSent",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cWallet",
        type: "address",
      },
    ],
    name: "CWalletSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "CollectiveInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "MemberRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "NewMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "OperatorRenounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "honeyPot",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
    ],
    name: "PoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "honeyPot",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
    ],
    name: "RewardForwarded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
    ],
    name: "blacklistTargets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokenContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_honeyPots",
        type: "address[]",
      },
    ],
    name: "createPools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_inviteSig",
        type: "bytes",
      },
      {
        internalType: "bytes16",
        name: "_inviteId",
        type: "bytes16",
      },
    ],
    name: "joinCollective",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "leaveCollective",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_honeyPot",
        type: "address",
      },
    ],
    name: "receivePoolReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_participant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountPaid",
        type: "uint256",
      },
    ],
    name: "recordPoolMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_targets",
        type: "address[]",
      },
    ],
    name: "whitelistTargets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICollective__factory {
  static readonly abi = _abi;
  static createInterface(): ICollectiveInterface {
    return new Interface(_abi) as ICollectiveInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ICollective {
    return new Contract(address, _abi, runner) as unknown as ICollective;
  }
}

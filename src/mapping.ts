import { BigInt } from "@graphprotocol/graph-ts"
import {
  RisqMATICPool,
  Provide,
} from "../generated/RisqMATICPool/RisqMATICPool"
import { ProvideType } from "../generated/schema"

export function handleProvide(event: Provide): void {
  let entity = new ProvideType(event.transaction.hash.toHexString())
  entity.account = event.params.account
  entity.contract = event.transaction.to!
  entity.amount = event.params.amount as BigInt
  entity.writeAmount = event.params.writeAmount as BigInt
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp
  // Entities can be written to the store with `.save()`
  entity.save()
}

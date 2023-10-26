'use client';

import { Dice } from 'dice-typescript';

export function rollADice(value: number) {
  const dice = new Dice();
  switch (value) {
    case 1:
      return {
        dice: '1d2',
        total: dice.roll('1d2').total,
      };
    case 2:
      return {
        dice: '1d4',
        total: dice.roll('1d4').total,
      };
    case 3:
      return {
        dice: '1d6',
        total: dice.roll('1d6').total,
      };
    case 4:
      return {
        dice: '1d8',
        total: dice.roll('1d8').total,
      };
    case 5:
      return {
        dice: '1d10',
        total: dice.roll('1d10').total,
      };
    case 6:
      return {
        dice: '1d12',
        total: dice.roll('1d12').total,
      };
    case 7:
      return {
        dice: '2d6',
        total: dice.roll('2d6').total,
      };
    case 8:
      return {
        dice: '2d8',
        total: dice.roll('2d8').total,
      };
    case 9:
      return {
        dice: '3d6',
        total: dice.roll('3d6').total,
      };
    case 10:
      return {
        dice: '2d10',
        total: dice.roll('2d10').total,
      };
    case 11:
      return {
        dice: '2d12',
        total: dice.roll('2d12').total,
      };
    case 12:
      return {
        dice: '3d8',
        total: dice.roll('3d8').total,
      };
    case 13:
      return {
        dice: '4d6',
        total: dice.roll('4d6').total,
      };
    case 14:
      return {
        dice: '3d10',
        total: dice.roll('3d10').total,
      };
    case 15:
      return {
        dice: '5d6',
        total: dice.roll('5d6').total,
      };
    case 16:
      return {
        dice: '4d8',
        total: dice.roll('4d8').total,
      };
    case 17:
      return {
        dice: '3d12',
        total: dice.roll('3d12').total,
      };
    case 18:
      return {
        dice: '6d6',
        total: dice.roll('6d6').total,
      };
    case 19:
      return {
        dice: '4d10',
        total: dice.roll('4d10').total,
      };
    case 20:
      return {
        dice: '7d6',
        total: dice.roll('7d6').total,
      };
  }
}

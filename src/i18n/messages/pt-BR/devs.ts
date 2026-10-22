import { carousel, commands } from './devs/carousel';
import { decisions } from './devs/decisions';
import { opening } from './devs/hero';
import { participation } from './devs/participation';
import { principles } from './devs/principles';
import { proposal } from './devs/proposal';

export const devs = { opening, proposal, principles, decisions, participation, commands, carousel } as const;

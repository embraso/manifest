import { closing } from './home/closing';
import { opening } from './home/hero';
import { manifesto } from './home/principles';
import { participation } from './home/participation';
import { motivations } from './home/motivations';
import { proposal } from './home/proposal';

export const home = { opening, proposal, motivations, manifesto, participation, closing } as const;

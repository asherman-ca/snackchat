import {values} from 'lodash';

export const selectAllSnacks = ({ snacks }) => values(snacks);

export const selectAllRatings = ({ ratings }) => values(ratings);

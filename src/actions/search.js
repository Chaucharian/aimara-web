import { SEARCH_CRITERIA, SEARCH } from './types';

export const search = criteria => ({
    type: SEARCH_CRITERIA,
    criteria
}); 
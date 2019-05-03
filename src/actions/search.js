import { SEARCH_CRITERIA } from './types';

export const search = criteria => ({
    type: SEARCH_CRITERIA,
    criteria
}); 
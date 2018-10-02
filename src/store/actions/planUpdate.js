import { UPDATE_PLAN } from './types';
import { UPDATE_YEARLY } from './types';

const updatePlan = (data) => ({
    type: UPDATE_PLAN,
    selectedPlan: data.plan,
});

const updateYearly = (data) => ({
    type: UPDATE_YEARLY,
    yearly: data.yearly,
});

export {
    updatePlan,
    updateYearly
};
import { recordRepairAttempt, getAutopilotStatus, resetCircuitBreaker } from '../lib/lexi/autopilot';

console.log('Testing Circuit Breaker:');
const res1 = recordRepairAttempt('test-issue', false);
console.log('Strike 1: canContinue =', res1.canContinue, 'tripped =', res1.tripped);

const res2 = recordRepairAttempt('test-issue', false);
console.log('Strike 2: canContinue =', res2.canContinue, 'tripped =', res2.tripped);

const status = getAutopilotStatus();
console.log('Autopilot status breakerTripped:', status.circuitBreakerTripped);

resetCircuitBreaker('Rev. Ayan Kumar Ghosh');
const afterStatus = getAutopilotStatus();
console.log('After reset: breakerTripped:', afterStatus.circuitBreakerTripped);

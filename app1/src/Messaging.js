const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// console.warn('Messaging loaded');

const registry = {};

const registerListener = (event, callback) => {
  if (!registry[event]) registry[event] = [callback];
  else registry[event].push(callback);
};

const triggerListeners = (event, payload) => {
  registry[event]?.forEach((callback) => setTimeout(() => callback(payload)));
};

export default {
  INCREMENT,
  DECREMENT,
  registerListener,
  triggerListeners,
};

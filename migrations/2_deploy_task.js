const TasksContract = artifacts.require("tasksContract");

module.exports = function (deployer) {
  deployer.deploy(TasksContract);
};
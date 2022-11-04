const tasksContract = artifacts.require("tasksContract")

contract("TasksContract", () => {
    before(async () => {
        this.tasksContract = await tasksContract.deployed();
    })
    


it("migrate deployed successfully", async () => {
    const address = await this.tasksContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  })

  it("get Tasks List", async () => {
    const tasksCounter = await this.tasksContract.tasksCounter();
    const task = await this.tasksContract.tasks(tasksCounter);

    assert.equal(task.id.toNumber(), tasksCounter);
    assert.equal(task.title, "Primer tarea del dia");
    assert.equal(task.description, "Tengo que cepillarme los dientes");
    assert.equal(task.done, false);
    assert.equal(tasksCounter, 1);
  })

})

const knex = require('knex')

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'project.db'
    }
})

async function get_all(){
    const employees = await connectedKnex('COMPANY').select('*')
    console.log(employees);
}

async function get_by_id(id){
    const employees = await connectedKnex('COMPANY').select('*').where('id', id).first()
    console.log(employees);
    return employees;
}

async function new_employee(new_emp){
    const result = await connectedKnex('COMPANY').insert(new_emp)
    console.log({...new_emp, ID: result[0]});
    return {...new_emp, ID: result[0]};
}

async function update_employee(updated_emp){
    const result = await connectedKnex('COMPANY').where('id', updated_emp.id).update(updated_emp_emp)
    console.log({...new_emp, ID: result[0]});
    return {...new_emp, ID: result[0]};
}

async function del_employee(id){
    const result = await connectedKnex('COMPANY').where('id', id).del()
    return result;
}

module.exports = (
    get_all, get_by_id, new_employee, update_employee, del_employee
)
class Instructor {
	constructor({ name, role = 'assistant' }) {
        this.name = name;
        this.role = role
    }
    renderDetails() {
        (`${this.name}: ${this.role}`)
    }

    static canTeach(instructor){
        return (instructor.role === 'about Elephants');
    }
}
let jon = new Instructor({ 'name': 'Jon', 'role' : 'about Elephants'});
(`${jon.name} can teach. ${Instructor.canTeach(jon)}`
);

console.log(jon)
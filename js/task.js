class Task {
    #id;
    #title;
    #description;
    #date;
    #isCompleted;

    constructor(name, _description) {
        this.#id = crypto.randomUUID();
        this.#title = name;
        this.#description = _description;
        this.#date = new Date();
        this.#isCompleted = false;
    }

    get task() {
        return {
            id: this.id,
            title: this.title_get,
            description: this.description_get,
            date: this.date_get,
            isCompleted: this.isCompleted_get
        }
    }

    get id() {
        return this.#id;
    }

    get title_get() {
        return this.#title;
    }

    get description_get() {
        return this.#description;
    }

    get date_get() {
        return this.#date;
    }

    get isCompleted_get() {
        return this.#isCompleted;
    }

    toggle_completion_status() {
        this.#isCompleted = !this.#isCompleted;
    }
}

export{Task}

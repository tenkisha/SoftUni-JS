function commandProcessor() {

    let state = '';

    function append(string) {
        state += string
    }

    function removeStart(n) {

        state = state.slice(n)
    }

    function removeEnd(n) {
        state = state.slice(0, -n)
    }

    function print() {
        console.log(state)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };


}

const procces = commandProcessor()

procces.append('hello');
procces.append('again');
procces.removeStart(3);
procces.removeEnd(4);
procces.print();

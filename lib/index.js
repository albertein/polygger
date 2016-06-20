var magic = {
    binding: {
        get pry() {
            debugger;
        }
    },
    pdb: {
        set_trace: function() {
            debugger;
        }
    }
};

//Thanks Obama!
global.binding = magic.binding;
global.pdb = magic.pdb; 

module.exports = magic;

export default {
    isSupport: function () {
        return 'localStorage' in window;
    },

    get: function (name) {
        if (!this.isSupport()) {
            return null;
        }
        try {
            var content = localStorage.getItem(name);
            return content;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

    set: function (name, content) {
        if (!this.isSupport()) {
            return;
        }
        this.remove(name);
        try {
            localStorage.setItem(name, content);
        } catch (e) {
            console.log(e.message);
        }
    },

    remove: function (name) {
        if (!this.isSupport()) {
            return;
        }
        try {
            localStorage.removeItem(name);
        } catch (e) {
            console.log(e.message);
        }
    }
};

(function () {

    const dynamicForms = {

        toggles: document.querySelectorAll('[data-df-target]'),

        init: function () {
            for (let i = 0; i < dynamicForms.toggles.length; i++) {
                document.querySelector('.' + dynamicForms.toggles[i].dataset.dfTarget).style.display = 'none';
            }
            dynamicForms.bind();
        },

        bind: function () {
            for (let i = 0; i < dynamicForms.toggles.length; i++) {
                dynamicForms.toggles[i].addEventListener('change', function () {
                    dynamicForms.toggle(this.dataset.dfTarget, dynamicForms.check(this));
                });
            }
        },

        toggle: function (target, show) {
            const targets = document.querySelectorAll('.' + target);
            for (let j = 0; j < targets.length; j++) {
                if (show) {
                    targets[j].style.display = 'block';
                } else {
                    targets[j].style.display = 'none';
                }
            }
        },

        check: function (toggle) {
            if (toggle.dataset.dfValue === toggle.value) {
                return true;
            }
            return false;
        }

    }

    dynamicForms.init();

})()
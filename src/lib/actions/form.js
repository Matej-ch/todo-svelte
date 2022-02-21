/**
 *
 * first attribute is element this is used on
 * in this case form
 *
 * usage as action use:<name_of_action>
 *
 * This function is called when page is refreshed
 * */
export function enhance(form, {pending, error, result}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        /** naming formData body, means in fetch there is no need to set it following way body:body */
        const body = new FormData(form);

        if (pending) pending(body, form);

        try {
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: 'application/json'
                },
                body
            });

            if (res.ok) {
                result(res, form);
            } else if (error) {
                error(res, null, form);
            } else {
                console.error(await res.text());
            }
        } catch (e) {
            if (error) {
                error(null, e, form);
            } else {
                throw e;
            }
        }
    }

    /** add handler  to submit event */
    form.addEventListener('submit', handleSubmit);

    /** remove listener if element (form in this case) is removed from page */
    /** prevents memory leaks */
    return {
        destroy() {
            form.removeEventListener('submit', handleSubmit);
        }
    };
}

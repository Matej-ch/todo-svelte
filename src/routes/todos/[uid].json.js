import { api } from './_api';

// PATCH /todos/:uid.json
export const patch = async (event) => {
	return api(event, `todos/${event.locals.userid}/${event.params.uid}`, {
		text: event.request.body.get('text'),
		done: event.request.body.has('done') ? !!event.request.body.get('done') : undefined
	});
};

// DELETE /todos/:uid.json
export const del = async (event) => {
	return api(event, `todos/${event.locals.userid}/${event.params.uid}`);
};

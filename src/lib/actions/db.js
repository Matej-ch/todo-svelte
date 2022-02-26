import {supabase} from "../../supabase.js";
import {alert} from "$lib/stores"

export async function truncate() {
    const {errorTags} = await supabase.from('tags').delete();

    const {errorTodos} = await supabase.from('todos').delete();

    const {errorProjects} = await supabase.from('projects').delete();

    let fullErrorMessage = '';
    if (errorTags) {
        fullErrorMessage += errorTags;
    }
    if (errorTodos) {
        fullErrorMessage += errorTodos;
    }
    if (errorProjects) {
        fullErrorMessage += errorProjects;
    }

    if (fullErrorMessage) {
        $alert = fullErrorMessage;
    }
}

export function sync() {
    console.log('sync');
}
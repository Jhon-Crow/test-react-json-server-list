import {SeminarId, SeminarType} from "./types.ts";

export async function getSeminars() {
    try {
        const response = await fetch('http://localhost:3000/seminars');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function createSeminar(seminar: SeminarType) {
    try {
        const response = await fetch('http://localhost:3000/seminars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(seminar)
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function updateSeminar(seminar: SeminarType) {
    try {
        const response = await fetch(`http://localhost:3000/seminars/${seminar.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(seminar)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteSeminar(id: SeminarId) {
    try {
        await fetch(`http://localhost:3000/seminars/${id}`, {
            method: 'DELETE'
        });
        console.log('Deleted ', id);
    } catch (error) {
        console.error('Error:', error);
    }
}

// src/apiService.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const sendMessage = async (message, threadId) => {
    try {
        const response = await api.post('/message', { message, thread_id: threadId });
        return response.data;
    } catch (error) {
        console.error('Error sending message to API:', error);
        throw error;
    }
};

export const startNewThread = async () => {
    try {
        const response = await api.post('/start');
        return response.data;
    } catch (error) {
        console.error('Error starting new thread:', error);
        throw error;
    }
};
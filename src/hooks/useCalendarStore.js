import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) => {
        // TODO: Update event

    
        if(calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        } else {
            // Creando
            const { data } = await calendarApi.post('/events', calendarEvent);
            console.log(data);

            dispatch(onAddNewEvent({...calendarEvent, id: data.event.id, user}));
        }
    }

    const startDeletingEvent = () => {
        // Todo: llegar al backend
        dispatch(onDeleteEvent());
    }
    
    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}

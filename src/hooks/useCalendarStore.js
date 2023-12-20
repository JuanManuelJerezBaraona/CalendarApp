import { useDispatch, useSelector } from "react-redux";


export const useCalendarStore = () => {
  
    const {events, activeEvent} = useSelector(state => state.calendar);


    
    return {
        // Propiedades
        events,
        activeEvent,

        // Métodos
    }
}

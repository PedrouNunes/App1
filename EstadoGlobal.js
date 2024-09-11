// // EstadoGlobal.js

// import { createContext, useContext, useState } from 'react';

// const EstadoGlobalContext = createContext();

// export const EstadoGlobalProvider = ({ children }) => {
//   const [userEmail, setUserEmail] = useState(null);

//   return (
//     <EstadoGlobalContext.Provider value={{ userEmail, setUserEmail }}>
//       {children}
//     </EstadoGlobalContext.Provider>
//   );
// };

// export const useEstadoGlobal = () => {
//   return useContext(EstadoGlobalContext);
// };

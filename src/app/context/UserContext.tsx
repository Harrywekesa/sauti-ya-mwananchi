import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'citizen' | 'mca' | 'mp' | 'senator' | 'governor' | 'admin';

interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  county: string;
  setCounty: (county: string) => void;
  subCounty: string;
  setSubCounty: (subCounty: string) => void;
  ward: string;
  setWard: (ward: string) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRoleState] = useState<UserRole>(() => {
    return (localStorage.getItem('sm_role') as UserRole) || 'citizen';
  });

  const [county, setCountyState] = useState(() => {
    return localStorage.getItem('sm_county') || 'Nairobi County';
  });

  const [subCounty, setSubCountyState] = useState(() => {
    return localStorage.getItem('sm_subcounty') || 'Westlands Constituency';
  });

  const [ward, setWardState] = useState(() => {
    return localStorage.getItem('sm_ward') || 'Kitisuru Ward';
  });

  const [userName, setUserNameState] = useState(() => {
    return localStorage.getItem('sm_username') || 'John Kamau';
  });

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
    localStorage.setItem('sm_role', role);
  };

  const setCounty = (val: string) => {
    setCountyState(val);
    localStorage.setItem('sm_county', val);
  };

  const setSubCounty = (val: string) => {
    setSubCountyState(val);
    localStorage.setItem('sm_subcounty', val);
  };

  const setWard = (val: string) => {
    setWardState(val);
    localStorage.setItem('sm_ward', val);
  };

  const setUserName = (val: string) => {
    setUserNameState(val);
    localStorage.setItem('sm_username', val);
  };

  return (
    <UserContext.Provider
      value={{
        userRole,
        setUserRole,
        county,
        setCounty,
        subCounty,
        setSubCounty,
        ward,
        setWard,
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

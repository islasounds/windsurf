// Datos de ejemplo para simular respuestas de la API de usuarios
export const UserMockData = {
  // Usuarios de ejemplo
  users: [
    // Usuario administrador principal (para acceso completo)
    {
      _id: "admin_user",
      name: "Administrador",
      email: "admin@cmmg.com",
      password: "admin123",
      role: "admin",
      picture: "/avatar.png",
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2025-05-05T18:00:00Z",
      subaccounts: ["demo_user"],
      allowedArtists: ["2001", "2002", "2003", "2004", "2005"]
    },
    
    // Usuario de demostración (para pruebas)
    {
      _id: "demo_user",
      name: "Usuario Demo",
      email: "demo@cmmg.com",
      password: "demo123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-01-02T00:00:00Z",
      updatedAt: "2025-05-05T18:00:00Z",
      subaccounts: [],
      allowedArtists: ["2001", "2002"]
    },
    {
      _id: "user_1001",
      name: "Administrador Principal",
      email: "admin@ejemplo.com",
      password: "password123",
      role: "admin",
      picture: "/avatar.png",
      createdAt: "2023-01-15T10:30:00Z",
      updatedAt: "2023-05-20T14:45:00Z",
      subaccounts: ["user_2001", "user_2002", "user_2003"],
      allowedArtists: ["2001", "2002", "2003", "2004", "2005"]
    },
    {
      _id: "user_1002",
      name: "Sello Discográfico",
      email: "sello@ejemplo.com",
      password: "password123",
      role: "label",
      picture: "/avatar.png",
      createdAt: "2023-02-10T09:15:00Z",
      updatedAt: "2023-06-05T11:20:00Z",
      subaccounts: ["user_2004", "user_2005"],
      allowedArtists: ["2001", "2002", "2003"]
    },
    {
      _id: "user_2001",
      name: "Usuario Estándar 1",
      email: "usuario1@ejemplo.com",
      password: "password123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-03-05T16:40:00Z",
      updatedAt: "2023-07-12T08:30:00Z",
      subaccounts: [],
      allowedArtists: ["2001"]
    },
    {
      _id: "user_2002",
      name: "Usuario Estándar 2",
      email: "usuario2@ejemplo.com",
      password: "password123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-03-10T14:20:00Z",
      updatedAt: "2023-07-15T10:45:00Z",
      subaccounts: [],
      allowedArtists: ["2002"]
    },
    {
      _id: "user_2003",
      name: "Usuario Estándar 3",
      email: "usuario3@ejemplo.com",
      password: "password123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-04-01T11:10:00Z",
      updatedAt: "2023-08-02T09:15:00Z",
      subaccounts: [],
      allowedArtists: ["2003"]
    },
    {
      _id: "user_2004",
      name: "Usuario Estándar 4",
      email: "usuario4@ejemplo.com",
      password: "password123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-04-15T13:25:00Z",
      updatedAt: "2023-08-10T15:30:00Z",
      subaccounts: [],
      allowedArtists: ["2004"]
    },
    {
      _id: "user_2005",
      name: "Usuario Estándar 5",
      email: "usuario5@ejemplo.com",
      password: "password123",
      role: "user",
      picture: "/avatar.png",
      createdAt: "2023-05-01T10:05:00Z",
      updatedAt: "2023-08-20T12:40:00Z",
      subaccounts: [],
      allowedArtists: ["2005"]
    }
  ],

  // Función para encontrar un usuario por ID
  findUserById: function(id: string) {
    return this.users.find(user => user._id === id);
  },

  // Función para encontrar un usuario por email
  findUserByEmail: function(email: string) {
    return this.users.find(user => user.email.toLowerCase() === email.toLowerCase());
  },

  // Función para actualizar un usuario
  updateUser: function(id: string, userData: any) {
    const userIndex = this.users.findIndex(user => user._id === id);
    if (userIndex === -1) return null;
    
    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString()
    };
    
    this.users[userIndex] = updatedUser;
    return updatedUser;
  },

  // Función para crear un usuario
  createUser: function(userData: any) {
    const newUser = {
      _id: `user_${Math.floor(3000 + Math.random() * 1000)}`,
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      subaccounts: [],
      allowedArtists: []
    };
    
    this.users.push(newUser);
    return newUser;
  },

  // Función para obtener subaccounts de un usuario
  getSubaccounts: function(userId: string) {
    const user = this.findUserById(userId);
    if (!user) return [];
    
    return user.subaccounts.map(subId => this.findUserById(subId)).filter(Boolean);
  },

  // Función para obtener artistas permitidos para un usuario
  getAllowedArtists: function(userId: string) {
    const user = this.findUserById(userId);
    if (!user) return [];
    
    return user.allowedArtists;
  },

  // Función para actualizar artistas permitidos para un usuario
  updateAllowedArtists: function(userId: string, artistIds: string[]) {
    const userIndex = this.users.findIndex(user => user._id === userId);
    if (userIndex === -1) return null;
    
    this.users[userIndex].allowedArtists = artistIds;
    return this.users[userIndex];
  }
};

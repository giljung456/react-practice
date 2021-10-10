const createSession = (session, accessToken) => {
  session.accessToken = accessToken;
};

export default createSession;

/* eslint-disable prettier/prettier */
import GlobalStyles from "./GlobalStyles";

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
      {children}
  </div>
);

export default Page;

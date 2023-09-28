import { format, fromUnixTime } from 'date-fns';
import { UserType } from '../../types';

const formatDate = (timestamp: number) => {
  const date = fromUnixTime(timestamp);
  return format(date, 'MMMM dd, yyyy');
};

const User = ({ user }: { user: UserType }) => (
  <table className="table-auto border-collapse max-w- w-full">
    <tbody>
      <tr>
        <td>User:</td>
        <td>{user.id}</td>
      </tr>
      <tr>
        <td>Created:</td>
        <td>{formatDate(user.created)}</td>
      </tr>
      <tr>
        <td>Karma:</td>
        <td>{user.karma}</td>
      </tr>
    </tbody>
  </table>
);

export default User;

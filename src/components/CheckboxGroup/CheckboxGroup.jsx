import React, { useState }from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useStyles } from './CheckboxGroup.styles';

const CheckboxGroup = ({
  data,
}) => {
  const classes = useStyles();
  const [checkboxData, setCheckboxData] = useState(data);

  const handleChange = (name, value, team) => {
    console.log('name', name);
    console.log('value', value);
    console.log('team', team);

    // Todo: Find the user that has been selected

    // Todo: Update value based on the value passed in

    // Todo: Re-assign to whole object, how..??
  }

  const handleSelectAll = (team) => {
    console.log('team', team);
    team.users.forEach(user => {
      // Todo: Need to assign to new object instead of property re-assign
      user.selected = true;
    });

    // Todo: Re-assign team to state, how..?
  }

  const nodeSelectableTeams = checkboxData.map(team => {
    return (
      <>
        {team.name}
        <FormControlLabel
          control={(
            <Checkbox
              key={team.name}
              name={team.name}
              checked={false}
              onChange={() => handleSelectAll(team)}
            />
          )}
          label="Select All"
        />
        {team.users.map(user => {
          return (
            <div key={user.userId} className={classes.group}>
              <FormControlLabel
                control={(
                  <Checkbox
                    key={user.userId}
                    name={user.userId}
                    checked={user.selected}
                    onChange={(event) => handleChange(event.target.name, event.target.checked, team)}
                  />
                )}
                label={user.userName}
              />
            </div>
          );
        })}
      </>
    );
  })

  return (
    <>
      {nodeSelectableTeams}
    </>
  );
}

CheckboxGroup.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default CheckboxGroup;

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ people = {}, planets, vehicles }) => {

  const peopleKeys = Object.keys(people)
  return peopleKeys.map((person, index) => {
    console.log('person: ', people[person].name);
    return ( <Card
      name={people[person].name}
      key={index}/>

    )
  })

  // return (
  //   <div className='card-container'>
  //     Card Container
  //     <Card
  //       people={mappedPeopleKeys}/>
  //   </div>
  // );

};


// {Object.keys(data).map((key, index) => {
//            return (
//              <Card key={index}
//                    id={index}
//                    data={data[key]}
//                    keyName={key}
//                    faveClick={faveClick}
//                    favoritesData={favorites} />
//            )
//          })
//        }


// CardContainer.propTypes = {
//
// };

export default CardContainer;

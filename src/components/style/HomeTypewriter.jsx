
import { Typewriter } from 'react-simple-typewriter'

const HomeTypewriter = () => {

  return (
    <div className='App my-14'>
      <h1 style={{  margin: 'auto 0', fontWeight: 'normal', fontSize:48, textAlign:'center' }}>
        Embark on a journey of{' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontSize:48, }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Discovery', 'Adventure', 'Learning', 'Memories', 'Excitement!']}
            loop={25}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default HomeTypewriter;
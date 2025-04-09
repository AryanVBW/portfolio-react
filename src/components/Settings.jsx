import { useState } from 'react';

function Settings() {
  const [settingsActive, setSettingsActive] = useState(false);
  const [visualMode, setVisualMode] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSettings = () => {
    setSettingsActive(!settingsActive);
  };

  const toggleVisualMode = () => {
    setVisualMode(!visualMode);
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.needtobeinvert').forEach(function(element) {
      element.classList.toggle('invertapplied');
    });
  };

  const toggleSound = () => {
    setSoundOn(!soundOn);
    const audio = document.getElementById('audioPlayer');
    
    if (!soundOn) { // Will become true after state updates
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className={`setting-container ${settingsActive ? 'settingactivate' : ''}`} id="setting-container">
      <input 
        type="checkbox" 
        id="switchforsetting" 
        checked={settingsActive}
        onChange={toggleSettings}
      />
      <label 
        htmlFor="switchforsetting" 
        className="needtobeinvert" 
        id="labelforsetting" 
        tabIndex="0"
        aria-label="settings for sound and appearance">
      </label>

      <div className={`visualmodetogglebuttoncontainer ${settingsActive ? 'visualmodeshow' : ''}`} id="visualmodetogglebuttoncontainer">
        <input 
          type="checkbox" 
          id="switchforvisualmode" 
          checked={visualMode}
          onChange={toggleVisualMode}
        />
        <label 
          htmlFor="switchforvisualmode" 
          id="labelforvisualmode" 
          tabIndex="0"
          aria-label="switch appearance">
        </label>
      </div>

      <div className={`soundtogglebuttoncontainer ${settingsActive ? 'soundmodeshow' : ''}`} id="soundtogglebuttoncontainer">
        <input 
          type="checkbox" 
          id="switchforsound" 
          checked={soundOn}
          onChange={toggleSound}
        />
        <label 
          htmlFor="switchforsound" 
          id="labelforsound" 
          tabIndex="0" 
          aria-label="switch sound"
          className="needtobeinvert">
        </label>
      </div>
    </div>
  );
}

export default Settings; 
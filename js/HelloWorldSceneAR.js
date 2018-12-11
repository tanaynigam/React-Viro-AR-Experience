'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroARImageMarker,
  ViroARTrackingTargets,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARImageMarker target = {"poster"}>
          <ViroBox position = {[0, .25, 0]} scale={[.1, .1, .1]}/>
        </ViroARImageMarker>
        <ViroARImageMarker target = {"Example"}>
          <ViroBox position = {[0, .25, 0]} scale={[.1, .1, .1]}/>
        </ViroARImageMarker>
        <ViroARImageMarker target = {"poster1"}>
          <ViroBox position = {[0, .25, 0]} scale={[.1, .1, .1]}/>
        </ViroARImageMarker>
        <ViroARImageMarker target = {"poster3"}>
          <ViroBox position = {[0, .25, 0]} scale={[.1, .1, .1]}/>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroARTrackingTargets.createTargets({
  poster : {
  source : {"uri" : "http://staging-pr.xrplatform.io/api/v1/asset/download/8cbaa9c0-ecea-11e8-a43b-02649f091b16"},
  orientation: "Up",
  physicalWidth : 0.2,
  height : 0.165
  },
  "Example" : {
    source : require('./res/guadalupeCopy.png'),
    orientation : "Up",
    physicalWidth : 0.25
  },
  poster1 : {
    source : {"uri" : "https://upload.wikimedia.org/wikipedia/commons/8/8c/Male_monarch_butterfly.JPG"},
    orientation: "Up",
    physicalWidth : 0.2,
    height : 0.165
  },
  poster3 : {
    source : {"uri" : "https://glimpse-arp.s3.amazonaws.com/markers/07dc6000-f716-11e8-8af8-3fb699732aa8?response-content-type=image%2Fjpeg&AWSAccessKeyId=AKIAIXBSX3ZKBE7LDUIA&Signature=5TVLizsQTZdKswzICEr5dvTACHw%3D&Expires=1544374877"},
    orientation: "Up",
    physicalWidth : 0.2,
    height : 0.165
  }
});

module.exports = HelloWorldSceneAR;

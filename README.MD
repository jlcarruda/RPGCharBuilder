# RPG Character Builder App
React-Native app for build creation of Characters for Tabletop RPG Systems (or not).

## Ok. Why an app for this?
Well, first I would like to try to study if its possible to create a generic app for this. I would like not to limit me to tabletop systems, but to almost any system that utilizes the basic elements of RPG.

## Engineering
The idea is to set a well defined domain of classes that can translate almost any RPG system into it. I'm going to use a Strategy Pattern approach for the system and its core elements.

So, in resume, the RPG system will be a set of classes and rules that will implement respective interfaces, so the system can understand and behave predictively, isolated from the RPG system strategy choosen.

## Roadmap

### Almost there
* Basic UI Elements
* Basic Character Builder
  * Primary Abilities
  * Secondary Abilities / Skills
  * Race
  * Class
* Character List
  * Add Character
  * Remove Character


### Near
* Inventory


### Future
* API Integration (needs to develop an API for saving characters based on user)

[//]: # (https://api.jannenw.info/v1/public/gear?slotType%5B%5D=Main%20Hand&class%5B%5D=Rogue
API da JANNE para Items)
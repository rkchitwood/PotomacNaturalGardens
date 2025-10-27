import type HeaderSectionInterface from "./HeaderSectionInterface";
import type ButtonLink from "./LinkLabelInterface";

export default interface LandingSectionInterface extends HeaderSectionInterface{
    btnOne: ButtonLink;
    btnTwo: ButtonLink;
};
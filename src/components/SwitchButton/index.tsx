import { useContext } from 'react';
import {
    BackgroundDiv,
    BackgroundBoxDiv,
    SwitchButtonBoxDiv
} from "./style";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { shade } from 'polished';

interface Props {
    toogleTheme(): void;
}

export function SwitchButton({ toogleTheme }: Props) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <>
            <BackgroundDiv>
                <BackgroundBoxDiv>
                    <SwitchButtonBoxDiv>
                        <Switch
                            onChange={toogleTheme}
                            checked={title == 'dark'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={50}
                            width={150}
                            handleDiameter={60}
                            offColor={shade(0.1, colors.primary)}
                            onColor={colors.secundary}
                        />
                    </SwitchButtonBoxDiv>
                </BackgroundBoxDiv>
            </BackgroundDiv>
        </>
    );
}
import React from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as SpotifyLogo } from '../../../../../assets/icons/brands/spotify.svg';

import { styles } from './soundtrack_front_styles';

const useStyles = createUseStyles(styles);

const SoundtrackFrontComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <ProfileCardFrontVector customClasses={{ container: classes.logo }} vector={SpotifyLogo} />
                    <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                        <FormattedMessage id="Soundtrack.front.title" defaultMessage="Discover my favourite tracks" />
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    <FormattedMessage id="Soundtrack.front.button" defaultMessage="My playlist" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const SoundtrackFront = SoundtrackFrontComponent;

import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './interested_by_front_styles';

const useStyles = createUseStyles(styles);

const InterestedByFrontComponent = ({
    data: { interestedBy },
    profileCardFrontTypographyProps,
    customClasses = {}
}) => {
    const classes = useStyles();
    return (
        <ProfileCardPaddedFront customClasses={{ container: cn(classes.container, customClasses.container) }}>
            <CenterContentContainer>
                <ProfileCardFrontTypography
                    classes={{
                        container: classes.typography
                    }}
                    {...profileCardFrontTypographyProps}
                >
                    <FormattedMessage
                        id="InterestedBy.front.content"
                        defaultMessage="I'm interested by {interestedBy}"
                        values={{ interestedBy }}
                    />
                </ProfileCardFrontTypography>
            </CenterContentContainer>
        </ProfileCardPaddedFront>
    );
};

export const InterestedByFront = InterestedByFrontComponent;

export interface Screen {
    bounds: string;
    boundsRatio: {
        height: number;
        width: number;
        top: number;
        left: number;
    }
    children?: Screen;

    className: string;
    contentDesc?: string;
    hintText?: string;
    inheritedLabel?: string;

    isAccessibilityFocused: boolean;
    isCheckable: boolean;
    isChecked: boolean;
    isClickable: boolean;
    isContentInvalid: boolean;
    isDismissable: boolean;
    isEditable: boolean;
    isEnabled: boolean;
    isFocusable: boolean;
    isFocused: boolean;
    isImportantForAccessibility: boolean;
    isLongClickable: boolean;
    isMultiLine: boolean;
    isPassword: boolean;
    isScreenReaderFocusable: boolean;
    isScrollable: boolean;
    isSelected: boolean;
    isShowingHintText: boolean;
    isVisibleToUser: boolean;
    packageName: string;
    paneTitle?: string;

    rect: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    }

    resourceId?: string;
    screenHeight: number;
    screenWidth: number;
    text?: string;
    toolTipText?: string;
}

export default Screen;
/**
 * @class Constants
 * This module exposes values that are read from in various components.
 * These can be used to, for example, match the appearance of custom components with components
 * from this library.
 *
 * @warning
 * The object returned by this module is read-only. It is not a config.
 */

export const Constants = {
	/**
	 * The default font for text.
	 */
	DefaultFont: Enum.Font.SourceSans,

	/**
	 * The default size for text.
	 */
	DefaultTextSize: 14,

	/**
	 * The default height of buttons.
	 */
	DefaultButtonHeight: 24,

	/**
	 * The default height of toggles (Checkbox and RadioButton).
	 */
	DefaultToggleHeight: 20,

	/**
	 * The default height of text and numeric inputs.
	 */
	DefaultInputHeight: 22,

	/**
	 * The default height of sliders.
	 */
	DefaultSliderHeight: 22,

	/**
	 * The default height of the permanent section of dropdowns.
	 */
	DefaultDropdownHeight: 20,

	/**
	 * The default height of rows in dropdown lists.
	 */
	DefaultDropdownRowHeight: 16,

	/**
	 * The default height of progress bars.
	 */
	DefaultProgressBarHeight: 14,

	/**
	 * The default window size of color pickers.
	 */
	DefaultColorPickerSize: new UDim2(0, 260, 0, 285),

	/**
	 * The default window size of number sequence pickers.
	 */
	DefaultNumberSequencePickerSize: new UDim2(0, 425, 0, 285),

	/**
	 * The default window size of date pickers.
	 */
	DefaultDatePickerSize: new UDim2(0, 202, 0, 160),
} as const;

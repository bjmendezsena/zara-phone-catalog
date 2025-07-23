import { render, getHtml, mockProductDetailsResponse } from "@/tests";
import {
  StorageSelector,
  StorageSelectorProps,
} from "@/features/product/screens/ProductDetails/StorageSelector";

describe(`<${StorageSelector.name}/>`, () => {
  const defaultProps: StorageSelectorProps = {
    storageOptions: mockProductDetailsResponse.storageOptions,
    selectedCapacity: mockProductDetailsResponse.storageOptions[0].capacity,
    onStorageChange: jest.fn(),
  };

  it("renders without crashing", () => {
    const { container } = render(<StorageSelector {...defaultProps} />);
    expect(getHtml(container)).toMatchSnapshot();
  });

  it("displays the correct number of storage options", () => {
    const { getAllByRole } = render(<StorageSelector {...defaultProps} />);
    const storageOptions = getAllByRole("button");
    expect(storageOptions).toHaveLength(defaultProps.storageOptions.length);
  });

  it("highlights the selected storage option", () => {
    const { getByTestId } = render(<StorageSelector {...defaultProps} />);
    const testId = `storage-option-${defaultProps.selectedCapacity}`;
    const selectedOption = getByTestId(testId);
    expect(selectedOption).toHaveClass("border-primary");
  });

  it("calls onStorageChange when a storage option is clicked", () => {
    const { getByTestId } = render(<StorageSelector {...defaultProps} />);
    const testId = `storage-option-${defaultProps.storageOptions[1].capacity}`;
    const storageOption = getByTestId(testId);
    storageOption.click();
    expect(defaultProps.onStorageChange).toHaveBeenCalledWith(
      defaultProps.storageOptions[1]
    );
  });
});

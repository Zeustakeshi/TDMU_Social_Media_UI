import SettingContainer from "../../components/settings/SettingContainer";
import SettingGroup from "../../components/settings/SettingGroup";
import SettingItemSwitch from "../../components/settings/SettingItemSwitch";

const GeneralSetting = () => {
    return (
        <SettingContainer header="Cài đặt chung">
            <SettingGroup title="Hệ thống">
                <SettingItemSwitch>Chế độ tối</SettingItemSwitch>
                <SettingItemSwitch>
                    Cho phép thông kê hoạt động của bạn
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Đề xuất">
                <SettingItemSwitch>
                    Cho phép đề xuất bạn bè trên trang chủ
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Cho phép hiển thị các chiến dịch tình nguyện
                </SettingItemSwitch>
                <SettingItemSwitch checked>
                    Cho phép hiển thị sản phẩm tình nguyện
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Riêng tư">
                <SettingItemSwitch>
                    Cho phép đề xuất bạn với những người khác
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Cho phép người khác có thể tìm thấy bạn
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Hiển thị trạng thái hoạt động
                </SettingItemSwitch>
            </SettingGroup>
        </SettingContainer>
    );
};

export default GeneralSetting;

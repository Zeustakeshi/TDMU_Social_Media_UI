import SettingContainer from "../../../components/settings/SettingContainer";
import SettingGroup from "../../../components/settings/SettingGroup";
import SettingItemSwitch from "../../../components/settings/SettingItemSwitch";

const NotificationSetting = () => {
    return (
        <SettingContainer header="Cài đặt thông báo">
            <SettingGroup title="Bài viết">
                <SettingItemSwitch>
                    Thông báo khi có người bình luận bài viết
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Thông báo khi được nhắc đến trong bình luận khác
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Thông báo khi có bài viết mới từ bạn bè
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Bạn bè">
                <SettingItemSwitch>
                    Nhận thông báo sinh nhật bạn bè
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Thông báo khi có người theo dõi
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Thông báo khi có bài viết mới từ bạn bè
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Sự kiện">
                <SettingItemSwitch>
                    Nhận thông báo về sự kiện sắp diễn ra
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Bảo mật">
                <SettingItemSwitch>
                    Nhận thông báo khi có hoạt động truy cập đáng ngờ
                </SettingItemSwitch>
            </SettingGroup>
        </SettingContainer>
    );
};

export default NotificationSetting;

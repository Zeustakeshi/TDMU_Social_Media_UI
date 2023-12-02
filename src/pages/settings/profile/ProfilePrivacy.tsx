import SettingContainer from "../../../components/settings/SettingContainer";
import SettingGroup from "../../../components/settings/SettingGroup";
import SettingItemSwitch from "../../../components/settings/SettingItemSwitch";

const ProfilePrivacy = () => {
    return (
        <SettingContainer header="Cài đặt quyền riêng tư">
            <SettingGroup title="Thông tin cá nhân">
                <SettingItemSwitch>
                    Hiển thị ngày sinh trên trang cá nhân
                </SettingItemSwitch>
                <SettingItemSwitch>Hiển thị giới tính</SettingItemSwitch>
                <SettingItemSwitch>Hiển thị với người lạ</SettingItemSwitch>
                <SettingItemSwitch>Cho phép hiển thị địa chỉ</SettingItemSwitch>
                <SettingItemSwitch>Hiển thị danh sách bạn bè</SettingItemSwitch>
                <SettingItemSwitch>
                    Hiển thị tình trạng mối quan hệ
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Hiển thị số lượng người theo dõi trên trang cá nhân
                </SettingItemSwitch>
            </SettingGroup>
            <SettingGroup title="Thông tin bài viết">
                <SettingItemSwitch>
                    Thông báo bài viết mới cho bạn bè
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Nhận thông báo về tình trạng bài viết
                </SettingItemSwitch>
                <SettingItemSwitch>
                    Nhận tin nhắn lý do bài viết bị gỡ
                </SettingItemSwitch>
            </SettingGroup>
        </SettingContainer>
    );
};

export default ProfilePrivacy;

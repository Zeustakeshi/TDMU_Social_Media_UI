import Card from "../cards/Cards";

type Props = {};

const ProfileIntro = ({}: Props) => {
    return (
        <Card className="min-w-[400px] max-w-[400px] min-h-[1000px] app-body-sticky-body-padding ">
            <h3 className="text-2xl text-slate-500 font-semibold mb-6">
                Giới Thiệu:{" "}
            </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            totam. Adipisci earum voluptates ipsam modi iste commodi repellat
            porro nobis sed expedita ducimus, vero at voluptas, fuga assumenda
            ipsum delectus!
        </Card>
    );
};

export default ProfileIntro;

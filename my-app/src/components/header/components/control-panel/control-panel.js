import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { styled } from 'styled-components';

const RightAlined = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled(Link)`
	font-size: 20px;
	width: 100px;
	height: 32px;
	border: 2px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BackwardButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlined>
				<Button to="/login">Войти</Button>
			</RightAlined>
			<RightAlined>
				<BackwardButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</BackwardButton>
				<Link to="post">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
